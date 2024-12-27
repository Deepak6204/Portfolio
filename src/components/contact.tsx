import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, MessageSquare, Send } from 'lucide-react';
import personalData from '@/data/personal.json';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-6 w-6" />
              Send me a message
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name">Name</label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email">Email</label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message">Message</label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  className="min-h-[150px]"
                />
              </div>
              <Button className="w-full">
                <Send className="h-4 w-4 mr-2" /> Send Message
              </Button>
            </form>
            <div className="mt-8 text-center">
              <p className="text-muted-foreground">Or reach out directly:</p>
              <a
                href={`mailto:${personalData.email}`}
                className="inline-flex items-center gap-2 mt-2 text-primary hover:underline"
              >
                <Mail className="h-4 w-4" />
                {personalData.email}
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}