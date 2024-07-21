---
title: Raspberry Alma
description: |
  Finally migrating to a stable distro on Raspberry…
date: 2024-07-20
authors:
  - key: mf
    title: a.k.a. useless admin or “Sir Tweak-a-Lot”
tags:
  - raspberry-pi
  - opensuse
  - almalinux
  - ansible
  - self-hosting
---

Every now and then I get angry at something not working on the Raspberry and so
I decide to swap the OSs. Now it's time for something new and not expected.

<!--truncate-->

## Purpose and past

After I've subscribed a VPS at vpsfree.cz for myself, I got an opportunity to
drop using an old laptop for running a local “server”. At that point all I've
had was self-hosted Gitea, some aliases on nginx and that was all. Out with the
old laptop and let's begin experimenting with the Raspberry, right?

The first OS that got on the Raspberry was _archLinux_ (BTW…). I've been using
it for a long time and had the best experience with. I haven't hit any issues,
but at the same time, you need to keep in mind we're running it off the SD card
and they are known to get worn out quickly, especially if you write **a lot**
which… guess what, is quite common with rolling and bleeding-edge distribution
:smile: And the worst part is keeping up with the updates.

And that's how I migrated to openSUSE Leap :) I've been using openSUSE for at
least 4 years during the high school and a bit more before and after… openSUSE
is very user-friendly (YaST is amazing) distribution and honestly just works.
However the cost lies in Cockpit not being available[^1] and some weird design
decision, e.g., networking stack is very fragile[^2].

And I've got finished in the recent weeks with some issues during updates, but
those can be, of course, blamed on me, cause I don't watch over it as I should
:)

I should probably sum up the latest state of what was running before I decided
to go for a merciless wipe. So here it is:

- local Gitea instance, just in case and out of habit
- Wireguard connection for easy administration
- Certbot & nginx; nginx is probably the biggest piece of work as it also
  provides reverse proxy for mikrotik router and Ubiquiti AP provided by ISP
- CUPS server that has joined the journey once the HP printer was too big of
  a pain in the :peach: to handle via USB
- DDNS service, cause there's public, but dynamic IP from ISP

## Choosing the next distro

I had the switch in mind for some time, but I couldn't decide on the
distribution… In the ideal world, I'd just slap CentOS Stream on it, **but**
there's no Raspberry “support” for CentOS[^3]. So the other choices were plain
Debian and something else from the RHEL-family which could be either Fedora[^4],
AlmaLinux or Rocky Linux.

I should admit that I'm not a big Debian fan :smile: Even though _12 bookworm_
is relatively on the same terms as anything that tries to match RHEL9, it still
feels weird. That might be caused by the fact that I've switched RPM-based
distributions a long time ago (including screwing around with archLinux and
_Jean Tux_[^5]) and never looked back (except for the desktop with NVIDIA GPU
that's pain in the :peach: and only Ubuntu runs reasonably… well).

Wearing the _red fedora_ also ruled out the Rocky Linux :slightly_smiling_face:
as I don't endorse nor support their _way of operation_

So AlmaLinux it is!

## Installing AlmaLinux 9

I'm going with AlmaLinux 9.4 on Raspberry Pi 3B. Opened the AlmaLinux's wiki and
first thing I got slapped by is

> original Raspberry Pi 3 (without "+" models) are not supported

GREAT! I took the risk, installed it. And it didn't boot :grin: It turns out
that the WiFi kernel module caused a kernel panic on the boot. From some people
on Reddit I found that it caused some issues, **but** worked, so I've just
decided to pop the SD card back in a PC and deny the module from loading. Voilà!
It boots!

## Setting up the “local server”

:::caution Public disclaimer

I suck as admin…

:::

Both the Raspberry and my VPS are maintained in the _caveman-style_ :smile: And
that's why I've decided to start with the less painful one (the Raspberry) to
write the Ansible playbooks for :)

I have already managed to migrate my dotfiles and “bootstrap” to be run via
Ansible, so I've just proceeded to extend that and also reorganize it a bit,
cause the roles grew in size :eyes:

And I have to admit that I've been mostly successful. Let's delve into details!

### SELinux

Yeah… that's something that hasn't been running on the openSUSE and I totally
forgot that hardening the SSHD config (including port change) requires notifying
SELinux about the port change :) Of course I managed to cut myself off :smile:

### Certbot

Certbot was the service I feared the most, as there is no reasonable way to
automate this. You need to run it manually at least the first time. But in the
end, it was quite OK.

### Cockpit

One downside of _caveman-style_ administration is the fact that you forget about
the tweaking you do. Reverse proxy breaks Cockpit by default. I was reading
through the documentation, but haven't managed to find the part that mentioned
the specific settings I had to change. When I was about to open the PR with
proposed changes, I noticed that it was in a different chapter :man_facepalming:

### CUPS

Cups went rather smoothly… except for the fact that it doesn't work on the one
and only Ubuntu desktop and there are no logs with reason why it fails to add
the printer :slightly_smiling_face:

Additionally installing the HP printer via `hp-setup` is very interesting
experience… I would've never expected the CLI to have a progress bar that opens
up at 0% and then just switches into _terms & conditions_… Yes, that progress
bar stayed at 0% even though it was downloading a PPD file **and progressing**.

### DDNS

I had smallish issue with deciding how to run the DDNS service. I went with
dropping my own buggy script and had to choose a DDNS client. Found _inadyn_
(that isn't built at all for Fedora and family) and _ddclient_. The _ddclient_
had some not very nice feedback, and the version that introduced the Cloudflare
support I need, was not included, so I dropped that. _inadyn_ is not packaged,
so I've set it up as systemd timer spawning a container :)

## Summary

Overall I've had a very pleasant experience setting up the AlmaLinux on the
Raspberry. Even though I took a gamble with the officially unsupported model of
RPi, it works. And it also seems to be filling the purpose it has!

[^1]:
    AFAIK there was some issue with dependencies, so it is available on
    Tumbleweed and also in the latest Leap 15.6

[^2]:
    By default uses _wicked_ and even when running it on desktop via
    _NetworkManager_ I've hit some inconsistencies with DNS, but… DNS **is** the
    Devil, right? :grin:

[^3]: And neither RHEL to be fair ;)

[^4]:
    6-month release cycle goes against the idea to have the least amount of
    updates as possible… and on top of that I think that we can safely agree on
    the fact that Fedora feels like _archLinux with extra steps_

[^5]: Gentoo…
