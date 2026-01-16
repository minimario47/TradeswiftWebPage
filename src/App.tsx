import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Refund } from './pages/Refund';
import { Cancellation } from './pages/Cancellation';
import { About } from './pages/About';
import { FeaturesPage } from './pages/FeaturesPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/funktioner" element={<FeaturesPage />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/integritetspolicy" element={<Privacy />} />
          <Route path="/villkor" element={<Terms />} />
          <Route path="/aterbetalning" element={<Refund />} />
          <Route path="/avbestallning" element={<Cancellation />} />
          <Route path="/om-oss" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
