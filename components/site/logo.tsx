import Image from 'next/image'

/** Clips the provided full-lockup logo down to just the orbit/planet mark. */
export function PlanetMark({ size = 36 }: { size?: number }) {
  return (
    <span
      aria-hidden
      className="relative inline-block shrink-0 overflow-hidden rounded-xl"
      style={{ width: size, height: size }}
    >
      <Image
        src="/orbit-logo.png"
        alt=""
        width={720}
        height={720}
        priority
        className="absolute max-w-none"
        style={{
          width: size * 1.78,
          height: size * 1.78,
          left: '-39%',
          top: '-19%',
        }}
      />
    </span>
  )
}

export function Logo({
  className = '',
  showWordmark = true,
  size = 34,
}: {
  className?: string
  showWordmark?: boolean
  size?: number
}) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <PlanetMark size={size} />
      {showWordmark && (
        <span className="font-display text-lg font-bold tracking-tight text-foreground">
          Orbit<span className="text-primary">.Ai</span>
        </span>
      )}
    </div>
  )
}
