"use client";

import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { TeamMemberForm } from "./team-member-form";


export function TeamMemberDialog() {

  const [open, setOpen] = useState(false);


  return (

    <Dialog
      open={open}
      onOpenChange={setOpen}
    >

      <DialogTrigger asChild>

        <Button>
          + Tambah Anggota
        </Button>

      </DialogTrigger>



      <DialogContent
        className="
          sm:max-w-xl
          max-h-[90vh]
          overflow-y-auto
        "
      >

        <DialogHeader>

          <DialogTitle>
            Tambah Anggota Relawan
          </DialogTitle>

        </DialogHeader>



        <TeamMemberForm

          onCancel={() =>
            setOpen(false)
          }

          onSuccess={() =>
            setOpen(false)
          }

        />

      </DialogContent>


    </Dialog>

  );
}