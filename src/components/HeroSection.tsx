import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export function HeroSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      console.log("Email submitted:", email);
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          Transform Your Ideas Into Reality
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl">
          Join thousands of innovators who are already using our platform to build, 
          launch, and scale their projects faster than ever before.
        </p>
        
        <Card className="w-full max-w-md p-6 shadow-lg border-0 bg-background/80 backdrop-blur-sm">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-lg font-medium mb-2">Get early access today</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button type="submit" size="lg">
                  Join Waitlist
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          ) : (
            <div className="text-center py-4">
              <h3 className="text-lg font-medium mb-2">Thank you for joining!</h3>
              <p className="text-muted-foreground">
                We'll be in touch soon with exclusive updates.
              </p>
              <Button 
                variant="link" 
                onClick={() => setIsSubmitted(false)}
                className="mt-4"
              >
                Sign up another email
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}