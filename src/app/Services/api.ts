"use server";
import axios, { AxiosInstance } from "axios";
const authToken = process.env.API_TOKEN;
const api: AxiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${authToken}`,
    "Content-Type": "application/json",
  },
});
const AlgoliaApi: AxiosInstance = axios.create({
  baseURL: process.env.ALGOLIA_BASE_URL,
  timeout: 10000,
  headers: {
    "X-Algolia-Api-Key": process.env.ALGOLIA_API_KEY,
    "X-Algolia-Application-Id": process.env.ALGOLIA_APP_ID,
    "Content-Type": "application/json",
  },
});
export async function getCategories() {
  try {
    const resp = await api.get("/categories");
    return resp.data;
  } catch (err) {
    console.error(err);
  }
}

export async function getCategoryBySlug(slug: string) {
  try {
    const resp = await api.get(`/categorie/details/${slug}`);
    return resp.data;
  } catch (err: any) {
    console.error(err);
  }
}
export async function getCategoryByID(id: string | number) {
  try {
    const resp = await api.get(`/categorie/detail/${id}`);
    return resp.data;
  } catch (err: any) {
    console.error(err);
  }
}
export async function getCategoryFormations(id: string | number) {
  try {
    const resp = await api.get(`/categorie/${id}`);
    return resp.data;
  } catch (err: any) {
    console.error(err);
  }
}

export async function getFormationBySlug(slug: string) {
  try {
    const resp = await api.get(`/formation/${slug}`);
    return resp.data;
  } catch (err: any) {
    console.error(err);
  }
}

export async function postContact(form: { [key: string]: string }) {
  try {
    const resp = await api.post(`/contact`, form);
    return resp.data;
  } catch (err: any) {
    console.error(err);
  }
}
export async function postInscription(form: { [key: string]: string }) {
  try {
    const resp = await api.post(`/inscription`, form);
    return resp.data;
  } catch (err: any) {
    console.error(err);
  }
}

export async function getSearchResults(query: { query: string }) {
  try {
    const resp = await AlgoliaApi.post("", query);
    return resp.data.hits;
  } catch (err: any) {
    console.error(err);
  }
}
