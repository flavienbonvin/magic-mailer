// TODO merge this with Zod type to avoid duplication
interface Attendee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export default Attendee;
