export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 py-12 dark:bg-zinc-950 font-sans">
      <main className="flex w-full max-w-md flex-col items-center rounded-2xl bg-white p-8 shadow-sm border border-gray-100 dark:border-zinc-800 dark:bg-zinc-900 text-center">
        {/* Profile Avatar / Badge */}
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 text-3xl font-bold text-white shadow-md">
          동재
        </div>

        {/* User Info */}
        <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-zinc-50">
          이동재
        </h1>
        <p className="mt-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">
          Student &amp; Vibe Coder
        </p>

        {/* Bio */}
        <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-zinc-300">
          안녕하세요! 바이브 코딩을 배우고 있는 대학생입니다.
        </p>

        {/* Badges / Tags */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300">
            💻 바이브 코딩
          </span>
          <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700 dark:bg-purple-950/50 dark:text-purple-300">
            🎓 대학생
          </span>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
            🚀 Next.js
          </span>
        </div>
      </main>
    </div>
  );
}

