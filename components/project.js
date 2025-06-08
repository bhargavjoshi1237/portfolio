import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const Project = ({ title, description, additionalInfo, imageUrl }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="w-[100%] md:w-[100%] h-full flex items-center border-[#e7e7e715] border-l">
          <div className="w-[80%] ml-auto mr-auto h-[80%]">
            <div className="w-[100%] h-[50px] items-center justify-start flex">
              <p className="text-2xl fon">{title}</p>
              <img src={imageUrl} className="ml-auto end-0" alt={title} />
            </div>
            <p className="text-sm fon mt-5  text-start">{description}</p>
            <p className="mt-2 text-sm fon  text-start">{additionalInfo}</p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Project;
