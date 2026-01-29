import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative w-full mt-32">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 blur-3xl -z-10" />

      <div className="w-full border-t border-white/10 bg-white/5 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-0 py-20">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-white">
                Обо мне
              </h3>
              <p className="text-white/60 leading-relaxed">
                Я junior frontend-разработчик, который активно развивается в веб-разработке.
                Люблю чистый UI, анимации и современные интерфейсы.
                Стремлюсь писать поддерживаемый и масштабируемый код.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-white">
                Контакты
              </h3>
              <ul className="space-y-3 text-white/70">
                <li className="hover:text-cyan-400 transition">📧 arzubek.dev@gmail.com</li>
                <li className="hover:text-cyan-400 transition">💬 Telegram: @arzubek_dev</li>
                <li className="hover:text-cyan-400 transition">🌍 Бишкек, Кыргызстан</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-white">
                Соцсети
              </h3>

              <div className="flex gap-4">
                {[
                  {
                    href: "https://github.com/",
                    img: "https://img.icons8.com/ios11/512/github.png",
                  },
                  {
                    href: "https://linkedin.com/",
                    img: "https://www.vhv.rs/dpng/d/2-20625_linkedin-logo-hd-png-download.png",
                  },
                  {
                    href: "https://t.me/",
                    img: "https://free-png.ru/wp-content/uploads/2021/01/telegram_cvet-d23c11fa.png",
                  },
                ].map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      w-12 h-12
                      flex items-center justify-center
                      rounded-xl
                      bg-white
                      shadow-lg
                      border border-white/20
                      transition
                    "
                    whileHover={{
                      scale: 1.15,
                      y: -3,
                      boxShadow: "0 0 20px rgba(79,209,197,0.6)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      src={item.img}
                      alt="social icon"
                      className="w-9 h-7 object-contain"
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="my-14 h-px bg-white/10" />

          <div className="flex flex-col md:flex-row items-center justify-between text-white/50 text-sm">
            <div>
              © {new Date().getFullYear()} Арзубек Токторов. Все права защищены.
            </div>
            <div className="mt-4 md:mt-0">
              Сделано на React + Tailwind
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
