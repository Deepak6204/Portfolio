import { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getCodeforcesRating } from '@/lib/api';

interface RatingGraphProps {
  platform: string;
  handle: string;
}

export function RatingGraph({ platform, handle }: RatingGraphProps) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      if (platform === 'Codeforces') {
        const ratings = await getCodeforcesRating(handle);
        setData(ratings);
      }
      setLoading(false);
    }

    fetchData();
  }, [platform, handle]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (data.length === 0) {
    return null;
  }

  return (
    <Card className="w-full h-[300px]">
      <CardHeader>
        <CardTitle>{platform} Rating History</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="rating"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}