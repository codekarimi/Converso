import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import React from 'react'
import {recentSessions} from "@/constants";
import CTA from '@/components/CTA';
import { getSubjectColor } from '@/lib/utils';

const page = () => {

  const companions= recentSessions;
  return (
    <main>
      <h1>Popular Companions </h1>

      <section className="home-section">
      {companions.map((companion) => (
                <CompanionCard
                    key={companion.id}
                    {...companion}
                    color={getSubjectColor(companion.subject)}
                />
            ))}
      </section>
      <section className="home-section">

      <CompanionList
                title="Recently completed sessions"
                companions={recentSessions}
                classNames="w-2/3 max-lg:w-full"
            />
            
            <CTA/>

      </section>
    </main>
  )
}

export default page