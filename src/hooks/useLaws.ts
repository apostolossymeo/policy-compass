import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export function useLaws(searchQuery: string = "") {
  return useQuery({
    queryKey: ["laws", searchQuery],
    queryFn: async () => {
      let query = supabase.from("laws").select("*").order("created_at", { ascending: false });

      if (searchQuery.trim()) {
        query = query.or(
          `title.ilike.%${searchQuery}%,plain_title.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%`
        );
      }

      const { data, error } = await query;
      if (error) throw error;
      return data;
    },
  });
}

export function useLawBySlug(slug: string) {
  return useQuery({
    queryKey: ["law", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("laws")
        .select("*")
        .eq("slug", slug)
        .single();
      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });
}

export function useLawSections(lawId: string | undefined) {
  return useQuery({
    queryKey: ["law_sections", lawId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("law_sections")
        .select("*")
        .eq("law_id", lawId!)
        .order("sort_order", { ascending: true });
      if (error) throw error;
      return data;
    },
    enabled: !!lawId,
  });
}

export function useSectionDocuments(sectionId: string | undefined) {
  return useQuery({
    queryKey: ["section_documents", sectionId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("section_documents")
        .select("*")
        .eq("section_id", sectionId!);
      if (error) throw error;
      return data;
    },
    enabled: !!sectionId,
  });
}
