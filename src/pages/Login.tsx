import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Info from "../components/Info";
import Input from "../components/Input";
import { useUserAuth } from "../context/authContext";

export default function Login() {
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const input = Object.fromEntries(formData);
    
    if (!input) return

    try{
      await logIn!(String(input.email), String(input.password)).then(() => {
        toast.success("Login realizado com sucesso!");
        navigate("/admin/product-list");
      })
    } catch (error: any) {
      toast.success(error.message);
      console.error(error);
    }
  }
  return (
    <>
      <main className="flex flex-col text-center min-h-[50vh] bg-black/10 p-4 py-16">
        <h1 className="text-gray font-bold text-base lg:text-lg mb-4">
          Iniciar Sessão
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mx-6 md:max-w-[275px] lg:max-w-[420px] md:w-full md:mx-auto">
          <Input placeholder="Escreva seu email" type="email" name="email" autoComplete="off" />
          <Input placeholder="Escreva sua senha" type="password" name="password" />
          <div className="self-center">
            <Button variant="secondary">Entrar</Button>
          </div>
        </form>
      </main>
      <Info />
      <Footer />
    </>
  );
}
