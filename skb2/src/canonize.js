export default function canonize(url) {
  const re = new RegExp("@?(https?:)?(//)?((www\.)?(vk||twitter)[^/]*/)?([a-zA-Z0-9_-]*)(\.?([a-zA-Z0-9_-]*)?)?(/*)?");
  const username = url.match(re)[6];
  return '@' + username;
}

//Застрял между 9 и 10 тестами. Проходит либо https://github.com/kriasoft/react-starter-kit (данный вариант), либо username=vk.com/pavel.durov
