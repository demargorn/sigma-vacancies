export interface ISkill {
   id: string;
   created_date: string;
   modified_date: string;
   project_id: string;
   account_id: null;
   user_id: null;
   object_type: string;
   object_item: null;
   object_code: string;
   name: null;
   meta: {
      flags: number;
      status: string;
      internal_id: number;
   };
   data: {
      title: string;
   };
}
