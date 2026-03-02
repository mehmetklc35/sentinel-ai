type Props = {
  title: string;
  value: string;
  description?: string;
};

export default function MetricCard({ title, value, description }: Props) {
  return (
    <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/10 transition overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-indigo-500/10 opacity-0 hover:opacity-100 transition" />

      <h3 className="text-sm opacity-70 mb-2 relative z-10">{title}</h3>

      <p className="text-3xl font-bold mb-2 relative z-10">{value}</p>

      {description && (
        <span className="text-xs opacity-60 relative z-10">{description}</span>
      )}
    </div>
  );
}
