import "@ponomarevlad/local-storage-polyfill/global";

const {DEBUG} = process?.env || {};

if (DEBUG) localStorage.setItem("debug", DEBUG);
