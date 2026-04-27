import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./components/HomePage";
import { ShopPage } from "./components/ShopPage";
import { StoryPage } from "./components/StoryPage";
import { StoriesPage } from "./components/StoriesPage";
import { StoryArticle } from "./components/StoryArticle";
import { SustainabilityPage } from "./components/SustainabilityPage";
import { PrivacyPolicyPage } from "./components/PrivacyPolicyPage";
import { TermsPage } from "./components/TermsPage";
import { LegalPage } from "./components/LegalPage";
import { ProductDetailPage } from "./components/ProductDetailPage";
import { FAQPage } from "./components/FAQPage";
import { ContactPage } from "./components/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "shop", Component: ShopPage },
      { path: "story", Component: StoryPage },
      { path: "stories", Component: StoriesPage },
      { path: "stories/:slug", Component: StoryArticle },
      { path: "sustainability", Component: SustainabilityPage },
      { path: "product/:slug", Component: ProductDetailPage },
      { path: "faq", Component: FAQPage },
      { path: "contact", Component: ContactPage },
      { path: "privacy-policy", Component: PrivacyPolicyPage },
      { path: "terms-of-service", Component: TermsPage },
      { path: "legal", Component: LegalPage },
    ],
  },
]);