/**
 * Contact constants
 * Define informações de contacto da empresa
 */

export interface ContactInfo {
  type: string;
  label: string;
  value: string;
  icon: string;
}

export const CONTACT_INFO: ContactInfo[] = [
  {
    type: "email",
    label: "Email",
    value: "contacto@evolvout.com",
    icon: "mail",
  },
  {
    type: "phone",
    label: "Telefone",
    value: "+244 945 367 487",
    icon: "phone",
  },
  {
    type: "location",
    label: "Localização",
    value: "Luanda, Angola",
    icon: "map-pin",
  },
] as const;

