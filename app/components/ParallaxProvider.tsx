"use client"

import * as React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

export default function VisualProvider({ children }: { children: React.ReactNode }) {
    return (
        <ParallaxProvider>
            {children}
        </ParallaxProvider>
    )
}