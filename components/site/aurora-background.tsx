export function AuroraBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      {/* Aurora blobs */}
      <div className="absolute left-1/2 top-[-18%] h-[60vh] w-[60vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.42),transparent_60%)] blur-3xl animate-aurora" />
      <div className="absolute right-[-10%] top-[20%] h-[45vh] w-[40vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.16),transparent_60%)] blur-3xl animate-float-slower" />
      <div className="absolute left-[-8%] top-[45%] h-[45vh] w-[40vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(88,28,220,0.28),transparent_60%)] blur-3xl animate-float-slow" />
      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(6,8,15,0.6)_100%)]" />
    </div>
  )
}
