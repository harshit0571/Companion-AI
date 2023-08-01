"use client";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const Search_Input = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryId = searchParams.get("categoryId");
  const name = searchParams.get("name");

  const [Value, setValue] = useState(name || "");

  return (
    <div className="relative">
      <Search className="absolute h-4 w-4 top-3 left-4 text-muted-foreground" />
      <Input placeholder="search..." className="pl-10 bg-primary/10" />
    </div>
  );
};

export default Search_Input;