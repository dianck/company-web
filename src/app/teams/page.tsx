'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

interface TeamMember {
  name: {
    first: string
    last: string
  }
  email: string
  picture: {
    large: string
  }
  location: {
    country: string
    city: string
  }
}

export default function TeamsPage() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=6')
      .then((res) => res.json())
      .then((data) => {
        setTeamMembers(data.results)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Meet Our Team</h1>
        <p className="text-center text-gray-600 mb-12">
          Tim kami terdiri dari para profesional yang berpengalaman dan berdedikasi tinggi.
        </p>

        {loading ? (
          <div className="text-center text-gray-600">Loading team members...</div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all text-center"
              >
                <Image
                  src={member.picture.large}
                  alt={`${member.name.first} ${member.name.last}`}
                  width={112}
                  height={112}
                  className="rounded-full mx-auto mb-4 border object-cover"
                />
                
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name.first} {member.name.last}
                </h3>
                <p className="text-gray-500">{member.location.city}, {member.location.country}</p>
                <p className="text-sm text-gray-400 mt-2">{member.email}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
