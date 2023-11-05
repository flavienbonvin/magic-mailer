// TODO merge this with Zod type to avoid duplication
interface Show {
  id: string;
  name: string;
  date: Date;
  finished: boolean;
}

export default Show;
