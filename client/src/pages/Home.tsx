import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Zap, Shield, Brain, Github } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
      {/* Navigation */}
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-slate-950/80 backdrop-blur-md border-b border-blue-500/20" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center font-bold text-sm">
              Æ
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl">AETERNA</span>
              <span className="text-xs text-cyan-400">par Yekzan</span>
            </div>
          </div>
          <a
            href="https://github.com/Yekzan1/aeterna"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600/20 hover:bg-blue-600/40 transition-colors border border-blue-500/30"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
                  AETERNA
                </h1>
                <p className="text-xl text-blue-200">
                  Le premier navigateur au monde avec un noyau <span className="font-bold text-cyan-300">C pur</span>
                </p>
              </div>

              <p className="text-lg text-slate-300 leading-relaxed max-w-lg">
                Découvrez l'avenir de la navigation web. AETERNA fusionne les performances brutes du C11 avec les capacités d'IA générative et l'intégration Web 3.0, offrant une architecture révolutionnaire pour le web décentralisé.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a href="/demo">
                  <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-lg flex items-center gap-2">
                    Essayer la Démo
                    <ArrowRight size={20} />
                  </Button>
                </a>
                <a href="#caracteristiques">
                  <Button
                    variant="outline"
                    className="border-blue-500/50 text-blue-300 hover:bg-blue-500/10 px-8 py-6 text-lg rounded-lg"
                  >
                    En Savoir Plus
                  </Button>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-blue-500/20">
                <div>
                  <p className="text-2xl font-bold text-cyan-400">100%</p>
                  <p className="text-sm text-slate-400">Noyau C11</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-cyan-400">Web 3.0</p>
                  <p className="text-sm text-slate-400">Natif</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-cyan-400">IA</p>
                  <p className="text-sm text-slate-400">Intégrée</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative hidden lg:block">
              <img
                src="/images/hero-kernel.png"
                alt="Noyau AETERNA"
                className="w-full h-auto drop-shadow-2xl rounded-lg"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="caracteristiques" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Caractéristiques <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Révolutionnaires</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Construit à partir de zéro avec la technologie de pointe et la sécurité au cœur
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1: Core Engine */}
            <div className="group relative p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/20">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Code2 size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2">Moteur C11</h3>
                <p className="text-sm text-slate-400">
                  Allocateur Arena personnalisé et boucle d'événements multi-threadée pour des performances maximales.
                </p>
              </div>
            </div>

            {/* Feature 2: Web 3.0 */}
            <div className="group relative p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 transition-all"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <Zap size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2">Intégration Web 3.0</h3>
                <p className="text-sm text-slate-400">
                  Résolution IPFS native, support HTTP/3 et intégration de portefeuille ECDSA.
                </p>
              </div>
            </div>

            {/* Feature 3: Security */}
            <div className="group relative p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:border-green-500/50 transition-all hover:shadow-lg hover:shadow-green-500/20">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/5 group-hover:to-emerald-500/5 transition-all"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <Shield size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2">Sandbox de Sécurité</h3>
                <p className="text-sm text-slate-400">
                  Isolation des processus avec seccomp et suppression des privilèges pour une protection maximale.
                </p>
              </div>
            </div>

            {/* Feature 4: AI */}
            <div className="group relative p-6 rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:border-orange-500/50 transition-all hover:shadow-lg hover:shadow-orange-500/20">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-500/0 to-red-500/0 group-hover:from-orange-500/5 group-hover:to-red-500/5 transition-all"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-600 rounded-lg flex items-center justify-center mb-4">
                  <Brain size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2">Pont IA Natif</h3>
                <p className="text-sm text-slate-400">
                  Interface LLM intégrée pour l'analyse intelligente de pages et l'automatisation de navigation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="relative py-24 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative hidden lg:block">
              <img
                src="/images/web3-integration.png"
                alt="Architecture Web 3.0"
                className="w-full h-auto drop-shadow-2xl rounded-lg"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  Architecture <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Décentralisée</span>
                </h2>
                <p className="text-lg text-slate-300">
                  La couche Web 3.0 d'AETERNA permet une interaction transparente avec les réseaux décentralisés et les technologies blockchain.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4 p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <div className="w-2 h-2 rounded-full bg-purple-400 mt-1 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold">Résolution IPFS</p>
                    <p className="text-sm text-slate-400">Accès direct au contenu décentralisé</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-1 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold">Support HTTP/3</p>
                    <p className="text-sm text-slate-400">Protocole de nouvelle génération pour des connexions plus rapides</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-lg bg-pink-500/10 border border-pink-500/20">
                  <div className="w-2 h-2 rounded-full bg-pink-400 mt-1 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold">Portefeuilles Crypto</p>
                    <p className="text-sm text-slate-400">Intégration native de portefeuille ECDSA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  Intelligence <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Alimentée par l'IA</span>
                </h2>
                <p className="text-lg text-slate-300">
                  Le pont IA natif permet une navigation intelligente avec inférence LLM locale ou distante pour une analyse avancée du contenu.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold">Analyse de Page</p>
                    <p className="text-sm text-slate-400">Résumé automatique et extraction de contenu</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-1 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold">Automatisation de Navigation</p>
                    <p className="text-sm text-slate-400">Exécution intelligente de tâches et récupération de données</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-lg bg-teal-500/10 border border-teal-500/20">
                  <div className="w-2 h-2 rounded-full bg-teal-400 mt-1 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold">Local & Distant</p>
                    <p className="text-sm text-slate-400">Support pour llama.cpp et modèles basés sur API</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative hidden lg:block">
              <img
                src="/images/ai-bridge.png"
                alt="Réseau de Neurones IA"
                className="w-full h-auto drop-shadow-2xl rounded-lg"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-slate-950 border-t border-blue-500/20">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-8 max-w-3xl mx-auto">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Prêt à explorer l'<span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">avenir</span> ?
              </h2>
              <p className="text-lg text-slate-400">
                Rejoignez la révolution. AETERNA est open-source et prêt pour le déploiement en production.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="/demo">
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-lg flex items-center gap-2">
                  Essayer Maintenant
                  <ArrowRight size={20} />
                </Button>
              </a>
              <a
                href="https://github.com/Yekzan1/aeterna"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-blue-500/50 text-blue-300 hover:bg-blue-500/10 px-8 py-6 text-lg rounded-lg"
                >
                  Voir le Code Source
                </Button>
              </a>
            </div>

            {/* Repository Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-blue-500/20">
              <div>
                <p className="text-xl font-bold text-cyan-400">C11</p>
                <p className="text-sm text-slate-400">Noyau Pur</p>
              </div>
              <div>
                <p className="text-xl font-bold text-cyan-400">Production</p>
                <p className="text-sm text-slate-400">Prêt</p>
              </div>
              <div>
                <p className="text-xl font-bold text-cyan-400">MIT</p>
                <p className="text-sm text-slate-400">Licence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-500/20 bg-slate-950/50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center font-bold text-xs">
                Æ
              </div>
              <span className="font-semibold">AETERNA © 2025 - Créé par Yekzan</span>
            </div>
            <p className="text-sm text-slate-400">
              Le premier navigateur au monde avec un noyau C pur
            </p>
            <a
              href="https://github.com/Yekzan1/aeterna"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Dépôt GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
