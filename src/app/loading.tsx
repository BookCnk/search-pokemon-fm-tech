export default function Loading() {
  return (
    <main className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col gap-8">
        <section className="panel rounded-[2rem] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_380px]">
            <div className="space-y-4">
              <div className="h-10 w-48 animate-pulse rounded-full bg-purple-500/10" />
              <div className="h-16 max-w-3xl animate-pulse rounded-[2rem] bg-white/5" />
              <div className="h-28 animate-pulse rounded-[2rem] bg-white/5" />
            </div>
            <div className="h-72 animate-pulse rounded-[1.75rem] bg-purple-900/20" />
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div className="panel h-[360px] animate-pulse rounded-[2rem] bg-white/3" />
          <div className="panel h-[360px] animate-pulse rounded-[2rem] bg-white/3" />
        </section>
      </div>
    </main>
  );
}
