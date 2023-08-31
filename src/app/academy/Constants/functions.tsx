import { StaticImageData } from "next/image";
import { JsxElement } from "typescript";

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
