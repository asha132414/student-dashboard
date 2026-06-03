# Student Dashboard

## Overview

A modern Student Learning Dashboard built with Next.js, Supabase, Tailwind CSS, and Framer Motion. The dashboard helps students track course progress and learning activity through an interactive and responsive interface.

## Features

* Dark Mode UI
* Responsive Bento Grid Layout
* Dynamic Course Cards from Supabase
* Animated Progress Bars
* Framer Motion Animations
* Loading Skeleton States
* Mobile, Tablet, and Desktop Responsive Design

## Tech Stack

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* Supabase
* Framer Motion
* Lucide React Icons

## Architecture

* Server Components fetch course data from Supabase.
* Client Components handle animations and interactive UI elements.
* Components are organized into reusable modules for maintainability.

## Environment Variables

Create a `.env.local` file:

NEXT_PUBLIC_SUPABASE_URL=your-supabase-url

NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

## Challenges Faced

* Building a responsive Bento Grid layout.
* Creating smooth animations without layout shifts.
* Securely integrating Supabase.
* Managing the Server Component and Client Component split.

## Deployment

The application is deployed on Vercel.
