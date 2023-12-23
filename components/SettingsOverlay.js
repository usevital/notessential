import { useEffect, useRef } from 'react';

import { getSettings, setSettings } from '@/lib/SettingsLib';

export default function SettingsOverlay() {
  const settingsPanelRef  = useRef();
  const settingsButtonRef = useRef();
  const settingsBgRef = useRef();


  const settingOptionThemeRef = useRef();
  const settingOptionLangRef = useRef();
  const settingOptionBlurRef = useRef();
  const settingOptionTrackingRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 50) {
        settingsButtonRef.current.classList.remove('scale-100');
        settingsButtonRef.current.classList.add('scale-0');

        setTimeout(() => {
          settingsButtonRef.current.classList.add('hidden');
          settingsButtonRef.current.classList.remove('flex');
        }, 100);
      } else {
        settingsButtonRef.current.classList.remove('hidden');
        settingsButtonRef.current.classList.add('flex');
        setTimeout(() => {
          settingsButtonRef.current.classList.remove('scale-0');
          settingsButtonRef.current.classList.add('scale-100');
        }, 100);
      }
    });
  }, []);

  useEffect(() => {
    if(!localStorage.getItem("tcf_settings"))
      localStorage.setItem("tcf_settings", JSON.stringify({ v: 1, theme: window.matchMedia("(prefers-color-scheme: dark)") ? 'dark' : 'light', language: 'en', blur: true, tracking: true, ads: true }))

    settingOptionThemeRef.current.value = getSettings().theme;
    settingOptionBlurRef.current.checked = getSettings().blur;
    settingOptionTrackingRef.current.checked = getSettings().tracking;
  }, [ setSettings, getSettings ]);

  const onSettingsButtonClick = () => {
    settingsPanelRef.current.classList.toggle('hidden');
    settingsPanelRef.current.classList.toggle('flex');

    settingsBgRef.current.classList.toggle('hidden');
    settingsBgRef.current.classList.toggle('block');
  }

  return (
    <>
      <div className={`bg-slate-300 dark:bg-gray-900 fixed bottom-20 left-4 p-3 rounded-md shadow-lg hidden flex-col z-30`} ref={settingsPanelRef}>
        <h1 className={`text-xl font-serif font-medium mb-2`}>Settings</h1>

        <div className={`flex justify-between items-center mb-2`}>
          <div className={`flex flex-col mr-4`}>
            <label className={`font-bold`}>Theme</label>
            <label>Choose your preferred theme.</label>
          </div>
          <select className={`rounded-md border-gray-950/50 bg-gray-950/40 accent-teal-700 cursor-pointer`} onChange={(e) => { setSettings('theme', e.target.value) }} ref={settingOptionThemeRef}>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </div>

        <div className={`hidden justify-between items-center mb-2`}>
          <div className={`flex flex-col mr-4`}>
            <label className={`font-bold`}>Language</label>
            <label>Choose your preferred language.</label>
          </div>
          <select className={`rounded-md border-gray-950/50 bg-gray-950/40 accent-teal-700 cursor-pointer`}>
            <option>🇬🇧 English (English, UK)</option>
            <option>🇭🇺 Magyar (Hungarian)</option>
            <option>🇫🇷 Français (French)</option>
            <option>🇩🇪 Deutsch (German)</option>
          </select>
        </div>

        <div className={`flex justify-between items-center mb-2`}>
          <div className={`flex flex-col mr-4`}>
            <label className={`font-bold`}>Blur Effects</label>
            <label>Disable it if it hurts performance.</label>
          </div>
          <input type="checkbox" className={`rounded-md border-gray-950/50 bg-gray-950/40 accent-teal-700 cursor-pointer`} onChange={(e) => { setSettings('blur', e.target.checked) }} ref={settingOptionBlurRef} />
        </div>

        <div className={`flex justify-between items-center mb-2`}>
          <div className={`flex flex-col mr-4`}>
            <label className={`font-bold`}>Analytics</label>
            <label>Disable it if you want to opt out from analytics.</label>
          </div>
          <input type="checkbox" className={`rounded-md border-gray-950/50 bg-gray-950/40 accent-teal-700 cursor-pointer`} onChange={(e) => { setSettings('tracking', e.target.checked) }} ref={settingOptionTrackingRef} />
        </div>

        <div className={`hidden`}>
          <div className={`flex flex-col mr-4`}>
            <label className={`font-bold`}>Advertisements</label>
            <label>You can also consider supporting me by donating.</label>
          </div>
          <input type="checkbox" className={`rounded-md border-gray-950/50 bg-gray-950/40 accent-teal-700 cursor-pointer`} onChange={(e) => { setSettings('ads', e.target.checked) }} />
        </div>
      </div>

      <div className={`fixed hidden bottom-0 left-0 right-0 top-0 bg-slate-300/70 dark:bg-gray-900/70 backdrop-blur-sm z-20`} onClick={onSettingsButtonClick} ref={settingsBgRef} />

      <button className={`transition-all bg-slate-300 hover:bg-teal-700 focus:bg-teal-700 dark:bg-gray-900 focus:outline outline-teal-700/70 outline-offset-2 outline-2 p-3 rounded-full shadow-lg fixed bottom-4 left-4 z-30`} ref={settingsButtonRef} onClick={onSettingsButtonClick}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className={`fill-black dark:fill-white`}>
          <path d="M551.761-62.804H408.239q-14.736 0-26.064-8.479-11.327-8.478-12.327-23.674l-15.761-98.565q-15.522-5.521-34.24-16.031-18.718-10.51-32.369-21.534l-90.565 41.761q-12.717 7.239-27.61 1.762-14.892-5.477-22.289-19.042L75.283-335.804q-8.718-12.904-4.479-26.998 4.24-14.094 15.718-22.111l82.282-61.064q-1-6.666-1.38-17.182-.381-10.515-.381-18.482 0-7.099.381-16.688.38-9.59 1.38-17.758l-82.282-59.761q-12.24-8.717-15.718-22.876-3.478-14.16 4.24-27.233l71.999-128.521q8.479-12.718 22.435-17.837 13.957-5.12 27.435 1.119l89.522 41.522q13.016-10.152 32.312-21.239 19.296-11.087 35.34-16.609l15.761-98.521q1-14.957 12.418-23.555 11.418-8.598 25.973-8.598h143.522q14.68 0 26.189 8.67 11.51 8.669 13.202 23.483l14.761 98.282q16.522 5.522 36.065 16.663 19.544 11.141 32.065 21.424l89.044-41.761q12.717-6.239 27.61-.952 14.892 5.287 22.307 18.006l72.144 127.327q7.765 12.938 4.287 27.713-3.478 14.776-14.957 23.493l-84.282 58.283q1 8.654 2.119 19.282 1.12 10.628 1.12 18.283 0 7.655-1.12 17.783-1.119 10.128-1.358 17.782l82.76 59.283q11.479 9.102 15.218 23.246 3.739 14.145-3.766 27.176l-72.186 129.134q-8.505 14.031-22.842 18.77-14.337 4.739-27.054-2.5l-90.565-41.761q-13.283 10.522-31.924 21.783-18.641 11.261-33.685 15.782l-15.761 98.565q-2 15.196-13.418 23.674-11.418 8.479-25.973 8.479ZM479-340.826q58.116 0 99.025-40.868 40.91-40.868 40.91-98.925 0-57.829-40.91-98.953-40.909-41.124-99.025-41.124-58.565 0-99.25 40.983-40.685 40.982-40.685 98.811 0 58.057 40.685 99.066 40.685 41.01 99.25 41.01ZM478.382-410Q449-410 428.62-430.826q-20.381-20.826-20.381-50.053 0-29.226 20.586-49.934 20.587-20.709 49.881-20.709 29.055 0 50.055 20.826t21 50.053q0 29.226-21.118 49.935Q507.526-410 478.382-410Zm1.857-70.761Zm-42.087 340.652h83.944l14.241-112.521q33.989-8.24 64.008-25.185 30.018-16.945 55.163-42.294l105.057 46.239 37.848-68.891-93-68.522q4.239-16.875 7.239-34.265 3-17.391 3-35.302t-2.619-34.77q-2.62-16.858-6.62-34.38l92.239-68-37.326-68.891-105.956 45.478q-23.044-26.478-53.237-45.012t-66.448-23.466l-12.837-110.761h-85.696l-13 110.761q-35.761 7.761-66.5 25.38-30.739 17.62-53.978 42.859l-103.717-45.239L160.826-618l92.761 68.283q-4.239 17.76-6.739 34.619-2.5 16.859-2.5 34.076 0 17.218 2.5 34.457t6.739 35.282l-92.761 68.522 38.848 68.891 104.761-46.239q25.761 26.239 56 43.479 30.239 17.239 63.717 25l14 111.521Z"/>
        </svg>
        <span className="sr-only">Open Site Settings</span>
      </button>
    </>
  )
}