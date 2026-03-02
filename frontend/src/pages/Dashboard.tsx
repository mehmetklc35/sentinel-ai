import AIScoreChart from "../components/AIScoreChart";
import MetricCard from "../components/MetricCard";

const metrics = [
  {
    title: "PR Risk Score",
    value: "72%",
    description: "AI tarafından analiz edildi",
    trend: "+12%",
    trendUp: false,
  },
  {
    title: "Code Quality",
    value: "A",
    description: "Son commit bazlı",
    trend: "+5%",
    trendUp: true,
  },
  {
    title: "AI Suggestions",
    value: "14",
    description: "Oluşturulan öneri",
    trend: "+2",
    trendUp: true,
  },
  {
    title: "Security Alerts",
    value: "2",
    description: "Potansiyel risk",
    trend: "-1",
    trendUp: true,
  },
];

const activities = [
  {
    title: "PR #142 analiz edildi",
    detail: "Risk skoru: Orta",
    time: "2 dk önce",
  },
  {
    title: "Yeni güvenlik uyarısı",
    detail: "Auth modülünde zayıf validasyon",
    time: "10 dk önce",
  },
  {
    title: "AI öneri oluşturdu",
    detail: "Fonksiyon karmaşıklığı azaltılabilir",
    time: "25 dk önce",
  },
  {
    title: "Kod kalite puanı güncellendi",
    detail: "A → A+",
    time: "1 saat önce",
  },
];

const Dashboard = () => {
  return (
    <div className="flex-1 p-10 text-white">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-sm opacity-60">AI destekli kod analiz paneli</p>
        </div>

        <div className="flex gap-3">
          <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm">
            <option>Son 7 gün</option>
            <option>Son 30 gün</option>
            <option>Son 90 gün</option>
          </select>

          <button className="bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-2 rounded-lg text-sm hover:scale-105 transition">
            Yeni Analiz
          </button>
        </div>
      </div>

      {/* METRICS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
        {metrics.map((metric) => (
          <MetricCard
            key={metric.title}
            title={metric.title}
            value={metric.value}
            description={metric.description}
          />
        ))}
      </div>

      {/* CHART */}
      <AIScoreChart />

      {/* ACTIVITY */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">AI Activity</h2>

        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 space-y-4">
          {activities.map((activity, i) => (
            <div
              key={i}
              className="flex justify-between items-start border-b border-white/10 pb-3 last:border-none"
            >
              <div>
                <p className="font-medium">{activity.title}</p>
                <span className="text-sm opacity-60">{activity.detail}</span>
              </div>
              <span className="text-xs opacity-50">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* AI SUGGESTIONS */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">AI Suggestions</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <p className="font-medium">Fonksiyon karmaşıklığı yüksek</p>
            <span className="text-sm opacity-60">
              authService.ts içinde refactor önerildi
            </span>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <p className="font-medium">Tekrarlanan kod bulundu</p>
            <span className="text-sm opacity-60">
              utils klasöründe optimizasyon yapılabilir
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
