'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <button
            className='relative w-fit lg:h-fit rounded-full cursor-pointer'
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
            <Sun
                size='16'
                className={`transition-transform transform ${
                    theme === 'light' ? 'scale-100 rotate-0' : 'scale-0 rotate-90'
                }`}
            />
            <Moon
                size='16'
                className={`absolute inset-0 m-auto transition-transform transform ${
                    theme === 'dark' ? 'scale-100 rotate-0' : 'scale-0 rotate-90'
                }`}
            />
        </button>
    )
}