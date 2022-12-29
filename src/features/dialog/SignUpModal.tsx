import { Button, Modal, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import type { FunctionComponent } from "react";
import { useTranslation } from "next-i18next";
import { useStore } from "../../hooks/useStore";

export const SignUpModal: FunctionComponent = ({}) => {
  const store = useStore();
  const { t } = useTranslation();
  const form = useForm({
    initialValues: {
      businessName: "",
      email: "",
      password: "",
      passwordRepeat: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <Modal
      centered
      opened={store.shownDialog.shown}
      onClose={() => store.closeDialog()}
      title="Introduce yourself!"
    >
      <TextInput
        label={t("signUpModal.businessName.label")}
        placeholder={t("signUpModal.businessName.placeholder")}
        {...form.getInputProps("businessName")}
      />
      <TextInput
        label={t("signUpModal.email.label")}
        placeholder={t("signUpModal.email.placeholder")}
        {...form.getInputProps("email")}
      />
      <TextInput
        security=""
        label={t("signUpModal.password.label")}
        placeholder={t("signUpModal.password.placeholder")}
        {...form.getInputProps("password")}
      />
      <TextInput
        security=""
        label={t("signUpModal.passwordRepeat.label")}
        placeholder={t("signUpModal.passwordRepeat.placeholder")}
        {...form.getInputProps("passwordRepeat")}
      />
      <div className="flex w-full items-center justify-between py-2">
        <Button radius="xl" variant="outline">
          {t("signUpModal.cancel")}
        </Button>
        <Button radius="xl">{t("signUpModal.confirm")}</Button>
      </div>
    </Modal>
  );
};
