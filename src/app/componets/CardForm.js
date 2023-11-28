import Button from "./Button";
import Field from "./Field";
import Input from "./Input";
import Label from "./Label";

async function createCard(formData) {
  "use server";
  // get each field out of formData
  // call supabase-client insertCard
}

export default function CardForm() {
  return (
    <form action={createCard} className="p-8 rounded-lg mt-4">
      <Field>
        <Label label="title" />
        <Input id="title" name="title" />
      </Field>
      <Field>
        <Label label="subtitle" />
        <Input id="subtitle" name="title" />
      </Field>
      <Field>
        <Label label="image" />
        <Input id="image" name="image" />
      </Field>
      <Field>
        <Label label="description" />
        <Input id="description" name="description" />
      </Field>
      <div className="mt-4 flex justify-end">
        <Button type="submit">ADD CARD</Button>
      </div>
    </form>
  );
}
