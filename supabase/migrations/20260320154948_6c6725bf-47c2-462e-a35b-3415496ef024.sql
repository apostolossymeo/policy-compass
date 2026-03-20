-- Laws table: each EU directive/regulation being tracked
CREATE TABLE public.laws (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  plain_title TEXT NOT NULL,
  description TEXT,
  tags TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Sections within a law (e.g. Article 3, Article 15)
CREATE TABLE public.law_sections (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  law_id UUID NOT NULL REFERENCES public.laws(id) ON DELETE CASCADE,
  slug TEXT NOT NULL,
  title TEXT NOT NULL,
  plain_title TEXT NOT NULL,
  why_it_matters TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  similarity_lobbyist_final INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(law_id, slug)
);

-- Document versions for each section
CREATE TYPE public.document_source AS ENUM ('commission', 'lobbyist', 'final_law', 'omnibus');

CREATE TABLE public.section_documents (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  section_id UUID NOT NULL REFERENCES public.law_sections(id) ON DELETE CASCADE,
  source public.document_source NOT NULL,
  source_label TEXT NOT NULL,
  source_subtitle TEXT NOT NULL,
  body_text TEXT NOT NULL,
  highlights TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(section_id, source)
);

-- Enable RLS
ALTER TABLE public.laws ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.law_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.section_documents ENABLE ROW LEVEL SECURITY;

-- Public read access (legislative data is public)
CREATE POLICY "Laws are publicly readable" ON public.laws FOR SELECT USING (true);
CREATE POLICY "Law sections are publicly readable" ON public.law_sections FOR SELECT USING (true);
CREATE POLICY "Section documents are publicly readable" ON public.section_documents FOR SELECT USING (true);

-- Indexes
CREATE INDEX idx_law_sections_law_id ON public.law_sections(law_id);
CREATE INDEX idx_section_documents_section_id ON public.section_documents(section_id);
CREATE INDEX idx_laws_tags ON public.laws USING GIN(tags);
CREATE INDEX idx_laws_title_search ON public.laws USING GIN(to_tsvector('english', title || ' ' || plain_title || ' ' || COALESCE(description, '')));