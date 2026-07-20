export const metadata = {
  title: "Resources",
  description: "Browse our developer resources.",
};
 
export default function ResourcesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

    
  return (
    <section>
        <h2>Resources</h2>
        <p>Browse our developer resources</p>
        <div>{children}</div>
      </section>
  );
}
