# Student Dashboard

## Overview

A modern student learning dashboard built with Next.js, Supabase, Tailwind CSS, and Framer Motion.

## Features

* Responsive Bento Grid Layout
* Dark Mode Interface
* Dynamic Course Cards
* Supabase Data Fetching
* Animated Progress Bars
* Framer Motion Animations
* Loading Skeletons
* Mobile, Tablet, and Desktop Support

## Tech Stack

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* Supabase
* Framer Motion
* Lucide React

## Architecture

* Server Components are used to fetch course data from Supabase.
* Client Components handle animations and interactions.
* Components are organized for reusability and maintainability.

## Environment Variables

Create a `.env.local` file:

NEXT_PUBLIC_SUPABASE_URL=your-supabase-url

NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

## Challenges Faced

* Building a responsive Bento Grid layout.
* Creating smooth animations without layout shifts.
* Integrating Supabase securely.
* Managing Server and Client Component separation.

## Deployment

The application is deployed on Vercel.
