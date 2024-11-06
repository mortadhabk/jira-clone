import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex gap-4">
      <Input type="text" placeholder="Input" />
      <Button>primary</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="muted">Muted</Button>
      <Button variant="teritrary">Teritrary</Button>
    </div>
  );
}
