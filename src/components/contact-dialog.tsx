"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactDialog({ asCTA = false }: { asCTA?: boolean }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const formAction = async (formData: FormData) => {
    setLoading(true);
    // TODO: integrar com API/Email/Sheets
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setOpen(false);
    alert("Pedido enviado! Entraremos em contacto.");
  };

  const Trigger = (
    <Button size="lg">Diagnostique a sua empresa gratuitamente</Button>
  );

  if (asCTA)
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{Trigger}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Diagnóstico gratuito</DialogTitle>
            <DialogDescription>
              Descreva a sua empresa e os principais desafios. Responderemos em
              breve.
            </DialogDescription>
          </DialogHeader>
          <form action={formAction} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="nome">Nome</Label>
                <Input id="nome" name="nome" required />
              </div>
              <div>
                <Label htmlFor="email">E‑mail</Label>
                <Input id="email" type="email" name="email" required />
              </div>
              <div>
                <Label htmlFor="empresa">Empresa</Label>
                <Input id="empresa" name="empresa" />
              </div>
              <div>
                <Label htmlFor="whatsapp">WhatsApp</Label>
                <Input id="whatsapp" name="whatsapp" />
              </div>
            </div>
            <div>
              <Label htmlFor="desafios">Principais desafios</Label>
              <Textarea
                id="desafios"
                name="desafios"
                placeholder="Ex.: Baixas vendas, pouco tráfego, sem posicionamento claro…"
              />
            </div>
            <Button type="submit" disabled={loading}>
              {loading ? "A enviar…" : "Enviar pedido"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    );

  return Trigger;
}
