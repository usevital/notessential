export default function Login() {
  return (
    <div className={`flex flex-col gap-12 items-center justify-center h-[100svh] w-[100svw]`}>
      <h1 className={`text-3xl font-serif font-medium`}>Login</h1>

      <form className={`flex flex-col gap-2 w-1/4`}>
        <input type="email" name="email" placeholder="E-Mail" className={`transition rounded-md border border-slate-400 bg-slate-300 dark:border-gray-950 dark:bg-gray-900 accent-teal-700`} />
        <input type="password" name="password" placeholder="Password" className={`transition rounded-md border border-slate-400 bg-slate-300 dark:border-gray-950 dark:bg-gray-900 accent-teal-700`} />
        <button className={`transition rounded-md border border-slate-400 bg-slate-300 dark:border-gray-950 dark:bg-gray-900 accent-teal-700 py-2 px-3`}>Continue</button>
      </form>

      <form className={`hidden`}>
        <input type="text" placeholder="OTP" className={`transition rounded-md border border-slate-400 bg-slate-300 dark:border-gray-950 dark:bg-gray-900 accent-teal-700`} />
        <button className={`transition rounded-md border border-slate-400 bg-slate-300 dark:border-gray-950 dark:bg-gray-900 accent-teal-700 py-2 px-3`}>Login</button>
      </form>
    </div>
  )
}