import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Suspense, lazy } from "react";
import { useAuthSync } from "@/hooks/useAuthSync";
import { useAuthRedirect } from "@/hooks/useAuthRedirect";
import { SkeletonDashboard } from "@/components/ui/skeleton-loader";
// Eager — critical path: main entry point and immediate nav targets
import Landing from "./pages/Landing";
import GuestStart from "./pages/GuestStart";
import NotFound from "./pages/NotFound";

// Lazy — auth flow (small pages, lazy is fine since they load from email links or Landing nav)
const Auth = lazy(() => import("./pages/Auth"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const VerifyEmail = lazy(() => import("./pages/VerifyEmail"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));

// Lazy — marketing & content pages (SEO entry points, each loads its own chunk)
const Pricing = lazy(() => import("./pages/Pricing"));
const Payment = lazy(() => import("./pages/Payment"));
const About = lazy(() => import("./pages/About"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const CVBuilderLanding = lazy(() => import("./pages/CVBuilderLanding"));
const CVBuilderCountry = lazy(() => import("./pages/CVBuilderCountry"));
const InterviewPrepLanding = lazy(() => import("./pages/InterviewPrepLanding"));
const SalaryHub = lazy(() => import("./pages/SalaryHub"));
const SalaryPage = lazy(() => import("./pages/SalaryPage"));
const InterviewQuestionsHub = lazy(() => import("./pages/InterviewQuestionsHub"));
const InterviewQuestionsByRole = lazy(() => import("./pages/InterviewQuestionsByRole"));
const CVTemplatesHub = lazy(() => import("./pages/CVTemplatesHub"));
const CVTemplatesByProfession = lazy(() => import("./pages/CVTemplatesByProfession"));
const ATSCheckerLanding = lazy(() => import("./pages/ATSCheckerLanding"));
const Prensa = lazy(() => import("./pages/Prensa"));
const Help = lazy(() => import("./pages/Help"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Testimonios = lazy(() => import("./pages/Testimonios"));
const DiagnosticoVocacionalLanding = lazy(() => import("./pages/DiagnosticoVocacionalLanding"));
const Install = lazy(() => import("./pages/Install"));
import DashboardLayout from "./layouts/DashboardLayout";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AdminRoute } from "./components/AdminRoute";

const Onboarding = lazy(() => import("./pages/Onboarding"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const CVList = lazy(() => import("./pages/CVList"));
const CVBuilder = lazy(() => import("./pages/CVBuilder"));
const InterviewLanding = lazy(() => import("./pages/InterviewLanding"));
const InterviewSetup = lazy(() => import("./pages/InterviewSetup"));
const InterviewSession = lazy(() => import("./pages/InterviewSession"));
const InterviewResults = lazy(() => import("./pages/InterviewResults"));
const InterviewAI = lazy(() => import("./pages/InterviewAI"));
const Settings = lazy(() => import("./pages/Settings"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));

const queryClient = new QueryClient();

function AuthSyncWrapper({ children }: { children: React.ReactNode }) {
  useAuthSync();
  useAuthRedirect();
  return <>{children}</>;
}

const dashboardChildren = (
  <>
    <Route index element={<Dashboard />} />
    <Route path="admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
    <Route path="cvs" element={<CVList />} />
    <Route path="cvs/:id" element={<CVBuilder />} />
    <Route path="interviews" element={<InterviewLanding />} />
    <Route path="interviews/setup" element={<InterviewSetup />} />
    <Route path="interviews/session" element={<InterviewSession />} />
    <Route path="interviews/results" element={<InterviewResults />} />
    <Route path="interviews/ai" element={<InterviewAI />} />
    <Route path="settings" element={<Settings />} />
  </>
);

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} storageKey="moonjab-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <ScrollToTop />
          <AuthSyncWrapper>
            <Suspense fallback={<SkeletonDashboard />}>
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/install" element={<Suspense fallback={<SkeletonDashboard />}><Install /></Suspense>} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registro" element={<Register />} />
                <Route path="/verify-email" element={<VerifyEmail />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/guest-start" element={<GuestStart />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/cv-builder" element={<CVBuilderLanding />} />
                <Route path="/cv-builder/:country" element={<CVBuilderCountry />} />
                <Route path="/interview-prep" element={<InterviewPrepLanding />} />
                <Route path="/salario" element={<SalaryHub />} />
                <Route path="/salario/:rol" element={<SalaryPage />} />
                <Route path="/salario/:rol/:pais" element={<SalaryPage />} />
                <Route path="/preguntas-de-entrevista" element={<InterviewQuestionsHub />} />
                <Route path="/preguntas-de-entrevista/:rol" element={<InterviewQuestionsByRole />} />
                <Route path="/plantillas-cv" element={<CVTemplatesHub />} />
                <Route path="/plantillas-cv/:profesion" element={<CVTemplatesByProfession />} />
                <Route path="/verificador-ats" element={<ATSCheckerLanding />} />
                <Route path="/prensa" element={<Prensa />} />
                <Route path="/help" element={<Help />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/testimonios" element={<Testimonios />} />
                <Route path="/diagnostico-vocacional" element={<DiagnosticoVocacionalLanding />} />
                <Route path="/onboarding" element={<ProtectedRoute><Onboarding /></ProtectedRoute>} />

                <Route path="/dashboard" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
                  {dashboardChildren}
                </Route>

                <Route path="/test/dashboard" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
                  {dashboardChildren}
                </Route>

                <Route path="/usuariostest/dashboard" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
                  {dashboardChildren}
                </Route>

                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </AuthSyncWrapper>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
