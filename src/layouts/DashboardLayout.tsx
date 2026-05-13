import { useState, useMemo, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useIsMobile } from '@/hooks/use-mobile';
import { OfficialLogo } from '@/components/OfficialLogo';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LanguageToggle } from '@/components/LanguageToggle';
import { UpgradeModal } from '@/components/UpgradeModal';
import { GuestBanner } from '@/components/GuestBanner';
import { useAuthStore } from '@/store/useAuthStore';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { getDashboardBasePath } from '@/lib/authRouting';
import {
  Home, FileText, Settings, Mic, Shield, Menu,
  Crown, Sparkles, ChevronLeft, ChevronRight,
} from 'lucide-react';
import { useSubscription, MOONJAB_PRO } from '@/hooks/useSubscription';

const SIDEBAR_STORAGE_KEY = 'mj-sidebar-collapsed';

export default function DashboardLayout() {
  const { t } = useTranslation();
  const { user, updateUser, startPremiumTrial } = useAuthStore();
  const location = useLocation();
  const isMobile = useIsMobile();
  const [upgradeModalOpen, setUpgradeModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    try {
      return localStorage.getItem(SIDEBAR_STORAGE_KEY) === 'true';
    } catch {
      return false;
    }
  });

  const { subscribed, productId, checkSubscription } = useSubscription();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('subscription') !== 'success') return;
    void checkSubscription();
    toast.success('Suscripción verificada');
    params.delete('subscription');
    const nextSearch = params.toString();
    window.history.replaceState({}, '', `${location.pathname}${nextSearch ? `?${nextSearch}` : ''}`);
  }, [location.pathname, location.search, checkSubscription]);

  useEffect(() => {
    if (!user || user.id.startsWith('guest_')) return;
    const isPro = subscribed && productId === MOONJAB_PRO.product_id;
    if (isPro && user.plan !== 'premium') {
      updateUser({ plan: 'premium', accessRole: 'premium_user' });
    } else if (!isPro && user.plan === 'premium') {
      updateUser({ plan: 'free', accessRole: 'free_user' });
    }
  }, [subscribed, productId, user?.id, user?.plan, updateUser]);

  const dashboardBasePath = getDashboardBasePath(user?.accessRole || 'free_user');
  const isPremium = user?.plan === 'premium';
  const isTrial = user?.accessRole === 'trial_user';

  useEffect(() => { void checkAdminStatus(); }, [user?.id, user?.accessRole]);

  const checkAdminStatus = async () => {
    if (!user || user.id.startsWith('guest_') || isTrial) { setIsAdmin(false); return; }
    try {
      const { data, error } = await supabase.from('user_roles').select('role').eq('user_id', user.id).single();
      setIsAdmin(!error && data?.role === 'admin');
    } catch { setIsAdmin(false); }
  };

  const handleStartTrial = async () => {
    try {
      await startPremiumTrial();
      toast.success(t('common.success'), { description: 'Disfruta 7 días gratis.' });
    } catch { toast.error(t('common.error')); }
  };

  const toggleCollapse = () => {
    const next = !sidebarCollapsed;
    setSidebarCollapsed(next);
    try { localStorage.setItem(SIDEBAR_STORAGE_KEY, String(next)); } catch {}
  };

  const mainNav = useMemo(() => {
    const items = [
      { icon: Home, label: t('nav.dashboard'), path: dashboardBasePath },
      { icon: FileText, label: 'CV Builder', path: `${dashboardBasePath}/cvs` },
      { icon: Mic, label: t('nav.interviews'), path: `${dashboardBasePath}/interviews` },
      { icon: Crown, label: 'Suscripción', path: '/pricing' },
    ];
    if (isAdmin && !isTrial) items.push({ icon: Shield, label: 'Admin', path: `${dashboardBasePath}/admin` });
    return items;
  }, [dashboardBasePath, isAdmin, isTrial, t]);

  const bottomNav = useMemo(() => [
    { icon: Settings, label: t('nav.settings'), path: `${dashboardBasePath}/settings` },
  ], [dashboardBasePath, t]);

  const isActive = (path: string) =>
    location.pathname === path || (path !== dashboardBasePath && location.pathname.startsWith(path));

  const NavItem = ({
    item,
    compact = false,
    onClick: onItemClick,
  }: {
    item: { icon: React.ComponentType<{ className?: string }>; label: string; path: string };
    compact?: boolean;
    onClick?: () => void;
  }) => {
    const active = isActive(item.path);
    const Icon = item.icon;

    if (compact) {
      return (
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              to={item.path}
              onClick={onItemClick}
              className={cn(
                'relative flex items-center justify-center p-2.5 rounded-lg transition-all duration-150',
                active
                  ? 'bg-primary/12 text-primary'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/60',
              )}
            >
              <Icon className="h-[18px] w-[18px]" />
              {active && (
                <span className="absolute right-1 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-primary" />
              )}
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right" className="text-xs font-medium">{item.label}</TooltipContent>
        </Tooltip>
      );
    }

    return (
      <Link
        to={item.path}
        onClick={onItemClick}
        className={cn(
          'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-150',
          active
            ? 'bg-primary/10 text-primary font-medium'
            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50',
        )}
      >
        <Icon className="flex-shrink-0 h-[18px] w-[18px]" />
        <span className="truncate flex-1">{item.label}</span>
        {active && <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />}
      </Link>
    );
  };

  const UserChip = ({ compact = false }: { compact?: boolean }) => {
    if (isTrial || !user) return null;
    const firstName = user.name?.split(' ')[0] || 'Usuario';
    const initials = (user.name || 'U').split(' ').map((n) => n[0]).slice(0, 2).join('').toUpperCase();

    if (compact) {
      return (
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex items-center justify-center px-1.5 py-1.5">
              <div className="w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center text-[11px] font-bold text-primary flex-shrink-0">
                {initials}
              </div>
            </div>
          </TooltipTrigger>
          <TooltipContent side="right" className="text-xs">
            <p className="font-medium">{firstName}</p>
            <p className="text-muted-foreground">{isPremium ? 'Pro' : 'Free'}</p>
          </TooltipContent>
        </Tooltip>
      );
    }

    return (
      <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-muted/30">
        <div className="w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center text-[11px] font-bold text-primary flex-shrink-0">
          {initials}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold truncate">{firstName}</p>
          <p className={cn('text-[10px] font-medium', isPremium ? 'text-primary' : 'text-muted-foreground')}>
            {isPremium ? '✦ Pro' : 'Free'}
          </p>
        </div>
      </div>
    );
  };

  /* ── Full sidebar (used for desktop expanded + mobile drawer) ── */
  const FullSidebar = ({ inDrawer = false }: { inDrawer?: boolean }) => (
    <div className="flex flex-col h-full">
      {/* Logo + collapse toggle */}
      <div className="flex items-center justify-between px-4 h-14 border-b border-border/40 flex-shrink-0">
        <OfficialLogo size="md" to={dashboardBasePath} asMotion animated={false} />
        {!inDrawer && (
          <button
            onClick={toggleCollapse}
            className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            aria-label="Colapsar menú"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* User identity */}
      <div className="px-3 pt-3 pb-2">
        <UserChip />
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto p-2.5 space-y-0.5 scrollbar-thin">
        {mainNav.map((item) => (
          <NavItem key={item.path} item={item} onClick={inDrawer ? () => setDrawerOpen(false) : undefined} />
        ))}
      </nav>

      {/* Bottom area */}
      <div className="p-2.5 border-t border-border/40 space-y-1">
        {bottomNav.map((item) => (
          <NavItem key={item.path} item={item} onClick={inDrawer ? () => setDrawerOpen(false) : undefined} />
        ))}
        <div className="px-1 pt-1.5 flex items-center gap-1">
          <LanguageToggle />
          <ThemeToggle />
        </div>
        {!isPremium && !isTrial && (
          <Button
            className="w-full text-xs h-8 mt-2 gap-1.5 font-medium"
            size="sm"
            onClick={() => { setUpgradeModalOpen(true); if (inDrawer) setDrawerOpen(false); }}
          >
            <Sparkles className="h-3 w-3" /> Upgrade a Pro
          </Button>
        )}
      </div>
    </div>
  );

  /* ── Collapsed mini sidebar (desktop only) ── */
  const MiniSidebar = () => (
    <aside className="border-r border-border/40 bg-card flex flex-col fixed h-screen z-40 w-[52px]">
      <div className="h-14 flex items-center justify-center border-b border-border/40 flex-shrink-0">
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={toggleCollapse}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
              aria-label="Expandir menú"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </TooltipTrigger>
          <TooltipContent side="right" className="text-xs">Expandir menú</TooltipContent>
        </Tooltip>
      </div>

      <div className="px-1.5 pt-2 pb-1">
        <UserChip compact />
      </div>

      <nav className="flex-1 overflow-y-auto py-1 px-1.5 space-y-0.5 scrollbar-thin">
        {mainNav.map((item) => <NavItem key={item.path} item={item} compact />)}
      </nav>
      <div className="px-1.5 py-2 border-t border-border/40 space-y-0.5">
        {bottomNav.map((item) => <NavItem key={item.path} item={item} compact />)}
        <div className="flex flex-col items-center gap-0.5 pt-1">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </aside>
  );

  const sidebarWidth = sidebarCollapsed ? 52 : 220;

  return (
    <TooltipProvider delayDuration={200}>
      <div className="min-h-screen flex w-full overflow-x-hidden bg-background">
        {/* Mobile hamburger */}
        {isMobile && (
          <Button
            variant="ghost"
            size="icon"
            className="fixed top-3 left-3 z-50 h-9 w-9 md:hidden bg-card border border-border/40 shadow-mj-sm"
            onClick={() => setDrawerOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu className="h-4 w-4" />
          </Button>
        )}

        {/* Mobile drawer */}
        <Sheet open={drawerOpen} onOpenChange={setDrawerOpen}>
          <SheetContent side="left" className="w-[240px] p-0" showCloseButton>
            <FullSidebar inDrawer />
          </SheetContent>
        </Sheet>

        {/* Desktop sidebar */}
        {!isMobile && (
          sidebarCollapsed
            ? <MiniSidebar />
            : (
              <aside
                className="border-r border-border/40 bg-card flex flex-col fixed h-screen z-40"
                style={{ width: sidebarWidth }}
              >
                <FullSidebar />
              </aside>
            )
        )}

        {/* Main content */}
        <main
          className={cn('flex-1 w-full min-w-0 transition-[margin] duration-200')}
          style={isMobile ? {} : { marginLeft: sidebarWidth }}
        >
          <GuestBanner />
          <Outlet />
        </main>

        <UpgradeModal
          open={upgradeModalOpen}
          onClose={() => setUpgradeModalOpen(false)}
          onStartTrial={handleStartTrial}
        />
      </div>
    </TooltipProvider>
  );
}
