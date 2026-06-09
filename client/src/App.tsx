import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import Blog from "./pages/Blog";
import BlogPost1 from "./pages/BlogPost1";

// Service Pages
import RoofRestoration from "./pages/RoofRestoration";
import LeakRepair from "./pages/LeakRepair";
import StormDamage from "./pages/StormDamage";
import Waterproofing from "./pages/Waterproofing";
import CementWaterproofing from "./pages/CementWaterproofing";
import FenceInstallation from "./pages/FenceInstallation";

// Location Pages
import TampaBay from "./pages/TampaBay";
import Brandon from "./pages/Brandon";
import HillsboroughCounty from "./pages/HillsboroughCounty";
import Riverview from "./pages/Riverview";

// Legal Pages
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/roof-restoration-vs-replacement" component={BlogPost1} />

      {/* Service Routes */}
      <Route path="/roof-restoration" component={RoofRestoration} />
      <Route path="/roof-restoration/leak-repair" component={LeakRepair} />
      <Route path="/roof-restoration/storm-damage" component={StormDamage} />
      <Route path="/waterproofing" component={Waterproofing} />
      <Route path="/cement-waterproofing" component={CementWaterproofing} />
      <Route path="/fence-installation" component={FenceInstallation} />

      {/* Location Routes */}
      <Route path="/tampa-bay" component={TampaBay} />
      <Route path="/brandon" component={Brandon} />
      <Route path="/hillsborough-county" component={HillsboroughCounty} />
      <Route path="/riverview" component={Riverview} />

      {/* Legal Routes */}
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />

      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
