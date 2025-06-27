'use client';

import { deletePot, updatePot } from '@/actions/pots';
import DeleteButton from '@/components/button/DeleteButton';
import EditButton from '@/components/button/EditButton';
import Modal from '@/components/modal/Modal';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { SpinnerMini } from '@/components/ui/SpinnerMini';
import { Pot } from '@prisma/client';
import { Suspense } from 'react';
import CancelButton from '../button/CancelButton';
import { potSchema } from '@/lib/schemas';

function EditDeletePots({ pot }: { pot?: Pot }) {
  return (
    <Modal>
      <DropdownMenu>
        <DropdownMenuTrigger
          aria-label="Menu options"
          className="text-grey-300 cursor-pointer"
        >
          ...
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="z-50 border-none bg-white">
          <Modal.Open opens="edit-pot">
            <DropdownMenuItem
              className="hover:bg-grey-100 focus:bg-grey-100 focus:outline-none"
              tabIndex={0}
              role="menuitem"
            >
              Edit Pot
            </DropdownMenuItem>
          </Modal.Open>

          <div className="mx-auto my-1 h-px w-[80%] border-b border-gray-300 last:border-b-0"></div>
          <Modal.Open opens="delete-pot">
            <DropdownMenuItem
              className="hover:bg-grey-100 focus:bg-grey-100 text-red focus:outline-none"
              tabIndex={0}
              role="menuitem"
            >
              Delete Pot
            </DropdownMenuItem>
          </Modal.Open>
        </DropdownMenuContent>
      </DropdownMenu>
      <Modal.Window
        name="edit-pot"
        initialData={pot}
        formAction={updatePot}
        validationSchema={potSchema}
      >
        <Modal.Header title="Edit Pot" />
        <Modal.Description description="If your saving targets change, feel free to update your pots." />
        <Modal.Name title="Pot Name" />
        <Modal.Target title="Target" name="pot" />
        <Modal.Theme title="Theme" />
        <Suspense fallback={<SpinnerMini />}>
          <EditButton />
        </Suspense>
      </Modal.Window>
      <Modal.Window name="delete-pot" initialData={pot} formAction={deletePot}>
        <Modal.Header title={`Delete '${pot?.name}'`} />
        <Modal.Description description="Are you sure you want to delete this pot? This action cannot be reversed, and all the data inside it will be removed forever." />
        <Suspense fallback={<SpinnerMini />}>
          <DeleteButton />
        </Suspense>
        <CancelButton />
      </Modal.Window>
    </Modal>
  );
}

export default EditDeletePots;
