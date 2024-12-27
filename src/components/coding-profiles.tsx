import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Star, Code2 } from 'lucide-react';
import { RatingGraph } from '@/components/rating-graph';
import profilesData from '@/data/profiles.json';

const icons = {
  Trophy,
  Star,
  Code2,
};

export default function CodingProfiles() {
  return (
    <section id="coding" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Coding Profiles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {profilesData.profiles.map((profile, index) => {
            const Icon = icons[profile.icon as keyof typeof icons];
            return (
              <a
                key={index}
                href={profile.link}
                className="transform hover:scale-105 transition-transform"
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon className={`h-6 w-6 ${profile.color}`} />
                      {profile.platform}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p>Rating: {profile.stats.rating}</p>
                      <p>Problems Solved: {profile.stats.solved}</p>
                      <p>Contests Participated: {profile.stats.contests}</p>
                    </div>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>
        
        {/* Rating Graphs */}
        <div className="space-y-8">
          {profilesData.profiles.map((profile, index) => (
            profile.handle && (
              <RatingGraph
                key={index}
                platform={profile.platform}
                handle={profile.handle}
              />
            )
          ))}
        </div>
      </div>
    </section>
  );
}