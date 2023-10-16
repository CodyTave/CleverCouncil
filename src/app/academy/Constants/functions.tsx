import { StaticImageData } from "next/image";

interface reference {
  id: string;
  img: StaticImageData;
  url: string;
}
export function refsDevider(allRefs: Array<reference>) {
  const refs: Array<reference[]> = [];
  let refsSection: Array<reference> = [];

  for (let index = 0; index < allRefs.length; index++) {
    refsSection.push(allRefs[index]);

    if (refsSection.length === 4 || index === allRefs.length - 1) {
      let tempIndex = refsSection.length - 1;
      while (refsSection.length < 4) {
        refsSection.push(allRefs[tempIndex]);
        tempIndex++;
      }

      refs.push(refsSection);
      refsSection = [];
    }
  }

  return refs;
}

export const ImageBaseUrl = (url: string, w?: number, h?: number) => {
  return "https://clevercouncil.com/" + url + (w && h ? `?w=${w}&h=${h}` : "");
};

export const LineDecoder = (text: string) => {
  const noFinishDot =
    text.charAt(text.length - 1) === "."
      ? text.slice(0, text.length - 1)
      : text;
  const sections: string[] = noFinishDot.split(".");
  return sections.map((line, id) => (
    <>
      {`${sections.length === id - 1 ? line : `${line}.`}`}
      <br />
    </>
  ));
};

export const listDecoder = (str: string) => {
  return str.split("\r\n");
};

export const programDecoder = (str: string) => {
  const sections = str.split("</ul>").map((item) => (item = item + "</ul>"));
  sections.pop(); //remove last empty element
  return sections.map((sec, index) => {
    const title = sec
      .match(/<p>.*?<\/p>/)
      ?.toString()
      .replace(/<\/?p>/g, "");
    const elements = sec.match(/<li>.*?<\/li>/g)?.map((item) => {
      return item.replace(/<\/?li>/g, "");
    });
    return {
      id: index,
      title: title,
      elements: elements,
    };
  });
};

export function parseDescription(
  inputString: string
): { id: number; title: string; content: string }[] {
  const regex =
    /<div>\s*<p><b>(.*?)<\/b><\/p>\s*<span>(.*?)<\/span>\s*<\/div>/g;
  //@ts-ignore
  const matches = [...inputString.matchAll(regex)];

  const result = matches.map((match, id) => {
    const title = match[1].trim();
    const content = match[2].trim();

    return { id, title, content };
  });
  return result;
}
