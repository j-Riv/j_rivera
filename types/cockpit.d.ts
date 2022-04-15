export interface Post {
  published: boolean;
  date_published: string; // YYYY-MM-DD
  title: string;
  image: {
    path: string; // /2022/01/29/image.jpg
    title: string; // image.png
    mime: string; // image/jpeg
    description: string;
    tags: string[];
    size: number;
    image: boolean;
    video: boolean;
    audio: boolean;
    archive: boolean;
    document: boolean;
    code: boolean;
    created: number;
    modified: boolean;
    _by: string;
    width: number;
    height: number;
    colors: string[]; //["#c9af8a", "#182335", "#677184", "#4e4343", "#b4671f"]
    folder: string;
    _id: string;
  };
  image_thumbnail: {
    path: string; // /2022/01/29/image.jpg
    title: string; // image.png
    mime: string; // image/jpeg
    description: string;
    tags: string[];
    size: number;
    image: boolean;
    video: boolean;
    audio: boolean;
    archive: boolean;
    document: boolean;
    code: boolean;
    created: number;
    modified: boolean;
    _by: string;
    width: number;
    height: number;
    colors: string[]; //["#c9af8a", "#182335", "#677184", "#4e4343", "#b4671f"]
    folder: string;
    _id: string;
  };
  image_alt: string;
  meta_description: string;
  content: string;
  tags: string[];
  title_slug: string;
  _mby: string;
  _by: string;
  _modified: number;
  _created: number;
  _id: string;
}

export interface Entries {
  entries: Post[];
  total: number;
}
