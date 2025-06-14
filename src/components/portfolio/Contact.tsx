
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-card/50">
      <div className="container mx-auto max-w-3xl px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Get In Touch</h2>
        <p className="text-muted-foreground text-center mb-12">Have a project in mind or just want to say hi? Feel free to reach out.</p>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input type="text" placeholder="Your Name" className="h-12" />
            <Input type="email" placeholder="Your Email" className="h-12" />
          </div>
          <Textarea placeholder="Your Message" rows={6} />
          <div className="text-center">
            <Button type="submit" size="lg">Send Message</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
