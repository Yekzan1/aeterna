import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Globe, Lock, Zap, Brain, Send, Plus, X } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

export default function BrowserDemo() {
  const [, setLocation] = useLocation();
  const [tabs, setTabs] = useState([
    { id: 1, title: "Accueil AETERNA", url: "https://aeterna.dev", active: true }
  ]);
  const [activeTab, setActiveTab] = useState(1);
  const [urlInput, setUrlInput] = useState("https://aeterna.dev");
  const [aiAnalysis, setAiAnalysis] = useState("");
  const [web3Status, setWeb3Status] = useState("Déconnecté");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const addTab = () => {
    const newId = Math.max(...tabs.map(t => t.id), 0) + 1;
    setTabs([...tabs, { id: newId, title: "Nouvel onglet", url: "", active: false }]);
    setActiveTab(newId);
  };

  const closeTab = (id: number) => {
    const newTabs = tabs.filter(t => t.id !== id);
    setTabs(newTabs);
    if (activeTab === id && newTabs.length > 0) {
      setActiveTab(newTabs[0].id);
    }
  };

  const navigateTo = () => {
    setTabs(tabs.map(t => 
      t.id === activeTab ? { ...t, url: urlInput, title: urlInput.split('/')[2] || urlInput } : t
    ));
  };

  const analyzePageWithAI = async () => {
    setIsAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      setAiAnalysis(
        "🤖 Analyse IA Complétée:\n\n" +
        "✓ Sécurité de la Page: Sûre\n" +
        "✓ Type de Contenu: Technologie\n" +
        "✓ Sujets Clés: C11, Web3, IA, Sécurité\n" +
        "✓ Sentiment: Positif\n" +
        "✓ Actions Recommandées: Aucune\n\n" +
        "Cette page présente AETERNA, un noyau de navigateur révolutionnaire écrit en C11 pur avec des capacités Web 3.0 et IA intégrées."
      );
      setIsAnalyzing(false);
    }, 1500);
  };

  const connectWeb3Wallet = () => {
    setWeb3Status("Connecté: 0x71C7656EC7ab88b098defB751B7401B5f6d8976F");
  };

  const currentTab = tabs.find(t => t.id === activeTab);

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      {/* Header */}
      <div className="border-b border-blue-500/20 bg-slate-900/50 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLocation("/")}
            className="text-blue-400 hover:text-blue-300"
          >
            <ArrowLeft size={20} />
          </Button>
          <h1 className="text-xl font-bold">Démo du Navigateur AETERNA</h1>
          <span className="text-xs text-cyan-400 ml-auto">par Yekzan</span>
        </div>
      </div>

      <div className="flex-1 flex gap-4 p-4 container mx-auto max-w-7xl">
        {/* Main Browser Window */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Browser UI */}
          <Card className="bg-slate-900 border-blue-500/20 p-4">
            {/* Address Bar */}
            <div className="flex gap-2 mb-4">
              <Input
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && navigateTo()}
                placeholder="Entrez une URL..."
                className="bg-slate-800 border-blue-500/30 text-white"
              />
              <Button
                onClick={navigateTo}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Globe size={18} />
              </Button>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-4 border-b border-blue-500/20 pb-2 overflow-x-auto">
              {tabs.map(tab => (
                <div
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-t-lg cursor-pointer transition-colors ${
                    activeTab === tab.id
                      ? "bg-blue-600/30 border-b-2 border-blue-500"
                      : "bg-slate-800/50 hover:bg-slate-800"
                  }`}
                >
                  <span className="text-sm truncate max-w-[150px]">{tab.title}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      closeTab(tab.id);
                    }}
                    className="hover:text-red-400"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
              <button
                onClick={addTab}
                className="px-3 py-2 hover:bg-slate-800 rounded-t-lg transition-colors"
              >
                <Plus size={18} />
              </button>
            </div>

            {/* Content Area */}
            <div className="bg-slate-800/50 rounded-lg p-6 min-h-[300px] border border-blue-500/10">
              {currentTab?.url ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-blue-400">
                    <Globe size={20} />
                    <span className="font-mono text-sm">{currentTab.url}</span>
                  </div>
                  <div className="prose prose-invert max-w-none">
                    <h2 className="text-2xl font-bold text-cyan-400">Contenu de la Page</h2>
                    <p className="text-slate-300">
                      Ceci est une fenêtre de navigateur simulée affichant l'URL : <code className="bg-slate-700 px-2 py-1 rounded">{currentTab.url}</code>
                    </p>
                    <p className="text-slate-400 text-sm">
                      Dans un vrai navigateur AETERNA, cela rendrait le contenu web réel avec les capacités complètes d'intégration Web 3.0 et IA.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full text-slate-400">
                  <p>Entrez une URL et appuyez sur Entrée pour naviguer</p>
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* Sidebar - Features */}
        <div className="w-80 flex flex-col gap-4">
          {/* AI Analysis */}
          <Card className="bg-slate-900 border-orange-500/20 p-4 flex-1 flex flex-col">
            <div className="flex items-center gap-2 mb-4 text-orange-400">
              <Brain size={20} />
              <h3 className="font-bold">Analyse IA</h3>
            </div>
            <Button
              onClick={analyzePageWithAI}
              disabled={isAnalyzing}
              className="bg-orange-600 hover:bg-orange-700 mb-4 w-full"
            >
              {isAnalyzing ? "Analyse en cours..." : "Analyser la Page"}
            </Button>
            <div className="flex-1 bg-slate-800/50 rounded p-3 text-sm text-slate-300 overflow-y-auto whitespace-pre-wrap">
              {aiAnalysis || "Cliquez sur 'Analyser la Page' pour exécuter une analyse IA sur le contenu de la page actuelle."}
            </div>
          </Card>

          {/* Web 3.0 Integration */}
          <Card className="bg-slate-900 border-purple-500/20 p-4">
            <div className="flex items-center gap-2 mb-4 text-purple-400">
              <Zap size={20} />
              <h3 className="font-bold">Web 3.0</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-slate-800/50 rounded p-3">
                <p className="text-xs text-slate-400 mb-2">État du Portefeuille</p>
                <p className="text-sm font-mono text-purple-300 truncate">{web3Status}</p>
              </div>
              <Button
                onClick={connectWeb3Wallet}
                disabled={web3Status !== "Déconnecté"}
                className="bg-purple-600 hover:bg-purple-700 w-full"
              >
                {web3Status === "Déconnecté" ? "Connecter le Portefeuille" : "Connecté"}
              </Button>
              <div className="text-xs text-slate-400 space-y-1">
                <p>✓ Support IPFS</p>
                <p>✓ HTTP/3</p>
                <p>✓ Signature ECDSA</p>
              </div>
            </div>
          </Card>

          {/* Security Status */}
          <Card className="bg-slate-900 border-green-500/20 p-4">
            <div className="flex items-center gap-2 mb-4 text-green-400">
              <Lock size={20} />
              <h3 className="font-bold">Sécurité</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>Sandbox Actif</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>SSL/TLS Sécurisé</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>Aucune Menace</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <span>Cookies: 3</span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-blue-500/20 bg-slate-900/50 p-4">
        <div className="container mx-auto px-4 text-center text-sm text-slate-400">
          <p>Ceci est une démonstration de l'interface du navigateur AETERNA. Pour l'implémentation complète du noyau C11, visitez <a href="https://github.com/Yekzan1/aeterna" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">GitHub</a></p>
        </div>
      </div>
    </div>
  );
}
