"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactSchema } from "@/schema";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "./ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "./ui/input-group";
import { Button } from "./ui/button";
import { BiSolidMessageEdit } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { MdAlternateEmail, MdSend } from "react-icons/md";
import { PiHashBold } from "react-icons/pi";
import { RiLoaderFill } from "react-icons/ri";
import { cn } from "@/lib/utils";

export const ContactForm = () => {
  const form = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  const submitting = form.formState.isSubmitting;
  async function onSubmit(data: ContactSchema) {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    toast("You submitted the following values:", {
      description: (
        <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: "bottom-right",
      classNames: {
        content: "flex flex-col gap-2",
      },
      style: {
        "--border-radius": "calc(var(--radius)  + 4px)",
      } as React.CSSProperties,
      dismissible: true,
    });
    form.reset();
  }
  return (
    <Card className="w-full bg-[#111318]/90 sm:max-w-lg mx-auto gap-4">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          {" "}
          <BiSolidMessageEdit className="text-primary" /> Send me a message
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form id="contact-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="contact-form-name">Name</FieldLabel>
                    <InputGroup>
                      <InputGroupInput
                        {...field}
                        id="contact-form-name"
                        aria-invalid={fieldState.invalid}
                        placeholder="Ryan Tido"
                        autoComplete="name"
                      />
                      <InputGroupAddon>
                        <FaUser />
                      </InputGroupAddon>
                    </InputGroup>

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="contact-form-email">Email</FieldLabel>
                    <InputGroup>
                      <InputGroupInput
                        {...field}
                        id="contact-form-email"
                        placeholder="your.email@domain.ext"
                        aria-invalid={fieldState.invalid}
                        autoComplete="email"
                      />
                      <InputGroupAddon>
                        <MdAlternateEmail />
                      </InputGroupAddon>
                    </InputGroup>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>
            <Controller
              name="subject"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="contact-form-subject">
                    Subject
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupInput
                      {...field}
                      id="contact-form-subject"
                      placeholder="Project Inquiry"
                      aria-invalid={fieldState.invalid}
                      autoComplete="off"
                    />
                    <InputGroupAddon>
                      <PiHashBold />
                    </InputGroupAddon>
                  </InputGroup>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="message"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="contact-form-message">
                    Message
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      id="contact-form-message"
                      placeholder="Tell me about your project"
                      rows={6}
                      className="min-h-24 resize-none"
                      maxLength={500}
                      aria-invalid={fieldState.invalid}
                    />
                    <InputGroupAddon align="block-end">
                      <InputGroupText className="tabular-nums">
                        {field.value?.length}/500 characters
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal" className="[&>button]:flex-1 mt-2">
          <Button
            type="submit"
            form="contact-form"
            className={cn(submitting && "cursor-not-allowed animate-pulse")}
            disabled={submitting}
          >
            {submitting ? (
              <RiLoaderFill className="animate-spin" />
            ) : (
              <MdSend />
            )}{" "}
            {submitting ? "Sending..." : "Send Message"}
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
};
