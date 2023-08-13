import { type ITag } from "@/components/tag";

export interface IArticleItem {
  id: string;
  title: string;
  descrition: string;
  cover?: string;
  markdownName: string;
  tags: ITag[];
  thumb: number;
  unlike: number;
  comment: number;
  views: number;
}

export const articleList: IArticleItem[] = [
  {
    id: "1",
    title: "nginx",
    descrition: "nginx 基本使用",
    cover: "nginx-1.png",
    markdownName: "nginx",
    tags: [
      {
        content: "nginx",
        type: "success",
      },
      {
        content: "服务器配置",
        type: "warning",
      },
    ],
    thumb: 0,
    unlike: 0,
    comment: 0,
    views: 0,
  },
  {
    id: "2",
    title: "JavaScript 面试题",
    descrition: "JavaScript 面试题",
    cover: "js-1.png",
    markdownName: "JavaScript笔试题",
    tags: [
      {
        content: "js",
        type: "success",
      },
      {
        content: "promise",
        type: "warning",
      },
    ],
    thumb: 100,
    unlike: 0,
    comment: 0,
    views: 0,
  },
];
