export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      graphql: {
        Args: {
          operationName?: string;
          query?: string;
          variables?: Json;
          extensions?: Json;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  public: {
    Tables: {
      activities_contests: {
        Row: {
          activity: string | null;
          award_info: string | null;
          company: string | null;
          created_at: string | null;
          d_day: number | null;
          department: string | null;
          description: string | null;
          dominant_color: string | null;
          duration: string | null;
          end_date: string | null;
          field: string | null;
          homepage_url: string | null;
          host: string | null;
          id: number;
          main_category: string | null;
          organizer: string | null;
          prize_amount: string | null;
          prize_benefit: string | null;
          region: string | null;
          registration_date: string | null;
          start_date: string | null;
          target: string | null;
          thumbnail_url: string | null;
          title: string;
          updated_at: string | null;
          view_count: number | null;
        };
        Insert: {
          activity?: string | null;
          award_info?: string | null;
          company?: string | null;
          created_at?: string | null;
          d_day?: number | null;
          department?: string | null;
          description?: string | null;
          dominant_color?: string | null;
          duration?: string | null;
          end_date?: string | null;
          field?: string | null;
          homepage_url?: string | null;
          host?: string | null;
          id?: number;
          main_category?: string | null;
          organizer?: string | null;
          prize_amount?: string | null;
          prize_benefit?: string | null;
          region?: string | null;
          registration_date?: string | null;
          start_date?: string | null;
          target?: string | null;
          thumbnail_url?: string | null;
          title: string;
          updated_at?: string | null;
          view_count?: number | null;
        };
        Update: {
          activity?: string | null;
          award_info?: string | null;
          company?: string | null;
          created_at?: string | null;
          d_day?: number | null;
          department?: string | null;
          description?: string | null;
          dominant_color?: string | null;
          duration?: string | null;
          end_date?: string | null;
          field?: string | null;
          homepage_url?: string | null;
          host?: string | null;
          id?: number;
          main_category?: string | null;
          organizer?: string | null;
          prize_amount?: string | null;
          prize_benefit?: string | null;
          region?: string | null;
          registration_date?: string | null;
          start_date?: string | null;
          target?: string | null;
          thumbnail_url?: string | null;
          title?: string;
          updated_at?: string | null;
          view_count?: number | null;
        };
        Relationships: [];
      };
      tomato_tips: {
        Row: {
          author: string | null;
          content: string;
          created_at: string | null;
          id: number;
          link: string;
          title: string;
          views: number | null;
        };
        Insert: {
          author?: string | null;
          content: string;
          created_at?: string | null;
          id?: number;
          link: string;
          title: string;
          views?: number | null;
        };
        Update: {
          author?: string | null;
          content?: string;
          created_at?: string | null;
          id?: number;
          link?: string;
          title?: string;
          views?: number | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      search_tomato_tips: {
        Args: {
          query: string;
        };
        Returns: {
          author: string | null;
          content: string;
          created_at: string | null;
          id: number;
          link: string;
          title: string;
          views: number | null;
        }[];
      };
      update_d_day: {
        Args: Record<PropertyKey, never>;
        Returns: undefined;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, 'public'>];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] &
        PublicSchema['Views'])
    ? (PublicSchema['Tables'] &
        PublicSchema['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema['CompositeTypes']
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema['CompositeTypes']
    ? PublicSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never;
