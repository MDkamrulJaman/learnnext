import React from "react";
import Link from "next/Link";

function Navigator() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="mobile">
            <a>Mobile</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>

        <li>
          <Link href="/calling">
            <a>GSSPs and GSPs</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>blog</a>
          </Link>
        </li>
        <li>
          <Link href="/time">
            <a>time</a>
          </Link>
        </li>
        <li>
          <Link href="/api/">
            <a> Data Fom Api</a>
          </Link>
        </li>
        <li>
          <Link href="/users/">
            <a>Api from local </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigator;
